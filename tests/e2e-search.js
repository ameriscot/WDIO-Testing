import App from '../page-objects/App'
import Navbar from '../page-objects/components/Navbar'
import ResultsPage from '../page-objects/pages/ResultsPage'

describe('E2E Tests - Search', () => {
    it('Should load homepage', () => {
        App.openHomepage()
    })

    it('Should submit searchbox', () => {
        Navbar.search('bank')
        const resultsTitle = ResultsPage.resultsTitle
        resultsTitle.waitForExist()
        expect(resultsTitle).toHaveText('Search Results:')
    })
})