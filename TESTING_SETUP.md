# Testing Setup Guide for Expedia AI App

## Quick Start - Add Automated Testing

### Install Testing Libraries

```bash
# Install Vitest (fast Vite-native test runner)
npm install -D vitest

# Install React Testing Library
npm install -D @testing-library/react @testing-library/jest-dom @testing-library/user-event

# Install jsdom for DOM simulation
npm install -D jsdom

# For E2E testing (optional)
npm install -D @playwright/test
```

### Configure Vitest

Create `vitest.config.ts`:
```typescript
import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/test/setup.ts',
    css: true,
  },
})
```

Create `src/test/setup.ts`:
```typescript
import { expect, afterEach } from 'vitest'
import { cleanup } from '@testing-library/react'
import '@testing-library/jest-dom/vitest'

// Cleanup after each test
afterEach(() => {
  cleanup()
})
```

### Add Test Scripts

Update `package.json` scripts:
```json
{
  "scripts": {
    "dev": "vite",
    "build": "tsc -b && vite build",
    "lint": "eslint .",
    "preview": "vite preview",
    "test": "vitest",
    "test:ui": "vitest --ui",
    "test:coverage": "vitest --coverage"
  }
}
```

---

## Example Tests

### Unit Test Example - Connect Component

Create `src/components/Connect.test.tsx`:
```typescript
import { describe, it, expect } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import Connect from './Connect'

describe('Connect Component', () => {
  it('should render all 4 app connection cards', () => {
    render(<Connect onContinue={() => {}} />)

    expect(screen.getByText(/Spotify/i)).toBeInTheDocument()
    expect(screen.getByText(/Netflix/i)).toBeInTheDocument()
    expect(screen.getByText(/Instagram/i)).toBeInTheDocument()
    expect(screen.getByText(/ESPN/i)).toBeInTheDocument()
  })

  it('should show progress indicator', () => {
    render(<Connect onContinue={() => {}} />)
    expect(screen.getByText(/0 of 4 apps connected/i)).toBeInTheDocument()
  })

  it('should update progress when connecting apps', () => {
    render(<Connect onContinue={() => {}} />)

    const spotifyCard = screen.getByText(/Spotify/i).closest('button')
    fireEvent.click(spotifyCard!)

    expect(screen.getByText(/1 of 4 apps connected/i)).toBeInTheDocument()
  })

  it('should disable Continue button until all apps connected', () => {
    render(<Connect onContinue={() => {}} />)

    const continueButton = screen.getByText(/Continue to Analysis/i)
    expect(continueButton).toBeDisabled()
  })

  it('should enable Continue button after all apps connected', () => {
    render(<Connect onContinue={() => {}} />)

    // Connect all 4 apps
    const cards = screen.getAllByRole('button').filter(btn =>
      btn.textContent?.includes('Connect')
    )

    cards.forEach(card => fireEvent.click(card))

    const continueButton = screen.getByText(/Continue to Analysis/i)
    expect(continueButton).not.toBeDisabled()
  })
})
```

### Integration Test Example - App Navigation

Create `src/App.test.tsx`:
```typescript
import { describe, it, expect } from 'vitest'
import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import App from './App'

describe('App Navigation Flow', () => {
  it('should navigate from Home to Connect', () => {
    render(<App />)

    const getStartedButton = screen.getByText(/Get Started/i)
    fireEvent.click(getStartedButton)

    expect(screen.getByText(/Connect Your Apps/i)).toBeInTheDocument()
  })

  it('should complete full user journey', async () => {
    render(<App />)

    // Home -> Connect
    fireEvent.click(screen.getByText(/Get Started/i))

    // Connect all apps
    const connectButtons = screen.getAllByRole('button').filter(btn =>
      btn.textContent?.includes('Connect')
    )
    connectButtons.forEach(btn => fireEvent.click(btn))

    // Continue to Analysis
    fireEvent.click(screen.getByText(/Continue to Analysis/i))

    // Wait for analysis to complete (10 seconds = 5 steps * 2s each)
    await waitFor(
      () => {
        expect(screen.getByText(/Choose Your Adventure/i)).toBeInTheDocument()
      },
      { timeout: 12000 }
    )
  }, 15000)
})
```

### Component-Specific Test Examples

#### Analysis Component Test
```typescript
import { describe, it, expect, vi } from 'vitest'
import { render, screen, waitFor } from '@testing-library/react'
import Analysis from './Analysis'

describe('Analysis Component', () => {
  it('should show all analysis steps', () => {
    render(<Analysis onComplete={() => {}} />)

    expect(screen.getByText(/Analyzing Spotify listening history/i)).toBeInTheDocument()
    expect(screen.getByText(/Processing Netflix watch patterns/i)).toBeInTheDocument()
    expect(screen.getByText(/Understanding Instagram interests/i)).toBeInTheDocument()
  })

  it('should progress through steps automatically', async () => {
    render(<Analysis onComplete={() => {}} />)

    // Initially at 0%
    expect(screen.getByText(/0%/)).toBeInTheDocument()

    // Should progress after 2 seconds
    await waitFor(
      () => expect(screen.getByText(/20%/)).toBeInTheDocument(),
      { timeout: 3000 }
    )
  })

  it('should call onComplete after all steps', async () => {
    const onComplete = vi.fn()
    render(<Analysis onComplete={onComplete} />)

    await waitFor(
      () => expect(onComplete).toHaveBeenCalled(),
      { timeout: 12000 }
    )
  }, 15000)
})
```

#### Suggestions Component Test
```typescript
import { describe, it, expect } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import Suggestions from './Suggestions'

describe('Suggestions Component', () => {
  it('should render 3 trip suggestions', () => {
    render(<Suggestions onSelectTrip={() => {}} />)

    expect(screen.getByText(/Brazilian Grand Prix/i)).toBeInTheDocument()
    expect(screen.getByText(/98% Match/i)).toBeInTheDocument()
  })

  it('should highlight selected trip', () => {
    render(<Suggestions onSelectTrip={() => {}} />)

    const tripCard = screen.getByText(/Brazilian Grand Prix/i).closest('div')
    fireEvent.click(tripCard!)

    expect(tripCard).toHaveClass('ring-4')
  })

  it('should enable button after trip selection', () => {
    render(<Suggestions onSelectTrip={() => {}} />)

    const viewButton = screen.getByText(/View Full Itinerary/i)
    expect(viewButton).toBeDisabled()

    const tripCard = screen.getByText(/Brazilian Grand Prix/i).closest('div')
    fireEvent.click(tripCard!)

    expect(viewButton).not.toBeDisabled()
  })
})
```

---

## E2E Testing with Playwright

### Setup Playwright

```bash
npm init playwright@latest
```

### Example E2E Test

Create `tests/e2e/full-journey.spec.ts`:
```typescript
import { test, expect } from '@playwright/test'

test('complete trip booking journey', async ({ page }) => {
  await page.goto('http://localhost:5173')

  // Home page
  await expect(page.getByRole('heading', { name: /Screen to Real Life/i })).toBeVisible()
  await page.getByRole('button', { name: /Get Started/i }).click()

  // Connect page
  await expect(page.getByText(/Connect Your Apps/i)).toBeVisible()

  // Connect all 4 apps
  await page.getByText('Spotify').click()
  await page.getByText('Netflix').click()
  await page.getByText('Instagram').click()
  await page.getByText('ESPN').click()

  await page.getByRole('button', { name: /Continue to Analysis/i }).click()

  // Analysis page - wait for completion
  await expect(page.getByText(/Choose Your Adventure/i)).toBeVisible({ timeout: 15000 })

  // Suggestions page
  await page.getByText(/Brazilian Grand Prix/i).click()
  await page.getByRole('button', { name: /View Full Itinerary/i }).click()

  // Trip Details page
  await expect(page.getByText(/São Paulo, Brazil/i)).toBeVisible()
  await expect(page.getByRole('button', { name: /Book This Trip/i })).toBeVisible()

  // Test day navigation
  await page.getByText('Day 2').click()
  await expect(page.getByText(/Day 2:/i)).toBeVisible()
})

test('visual regression - home page', async ({ page }) => {
  await page.goto('http://localhost:5173')
  await expect(page).toHaveScreenshot('home-page.png')
})
```

---

## Running Tests

```bash
# Run unit/integration tests
npm test

# Run tests in watch mode
npm test -- --watch

# Run tests with UI
npm run test:ui

# Run tests with coverage
npm run test:coverage

# Run E2E tests
npx playwright test

# Run E2E tests in UI mode
npx playwright test --ui
```

---

## Test Coverage Goals

Aim for:
- **Unit tests**: 80%+ coverage for component logic
- **Integration tests**: Cover all navigation flows
- **E2E tests**: Cover critical user journeys
- **Accessibility tests**: All interactive elements

## Accessibility Testing

```typescript
import { axe, toHaveNoViolations } from 'jest-axe'

expect.extend(toHaveNoViolations)

it('should have no accessibility violations', async () => {
  const { container } = render(<Connect onContinue={() => {}} />)
  const results = await axe(container)
  expect(results).toHaveNoViolations()
})
```

---

## Continuous Integration

Add to `.github/workflows/test.yml`:
```yaml
name: Tests
on: [push, pull_request]

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: '20'
      - run: npm install
      - run: npm run lint
      - run: npm test
      - run: npm run build
```

---

## Quick Reference

| Test Type | When to Use | Tool |
|-----------|-------------|------|
| Unit | Individual component logic | Vitest + Testing Library |
| Integration | Component interactions | Vitest + Testing Library |
| E2E | Full user journeys | Playwright |
| Visual | UI appearance | Playwright screenshots |
| Accessibility | WCAG compliance | jest-axe |

---

## Tips

1. **Start small**: Begin with simple unit tests
2. **Test user behavior**: Focus on what users do, not implementation details
3. **Mock timers**: Use `vi.useFakeTimers()` for Analysis component
4. **Async testing**: Always use `waitFor` for async operations
5. **Accessibility**: Test keyboard navigation and screen readers
