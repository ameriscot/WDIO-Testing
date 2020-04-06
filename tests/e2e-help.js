import App from '../page-objects/App'
import LoginPage from '../page-objects/pages/LoginPage'
import HelpPage from '../page-objects/pages/HelpPage'
import Navbar from '../page-objects/components/Navbar'

describe('E2E Testing - Help Section', () => {
    it('Should log into application', () => {
        App.openLoginPage()
        LoginPage.login('username', 'password')
        Navbar.insideNavbarIsVisible()
    })

    it('Should load help content', () => {
        Navbar.clickSettings()
        Navbar.clickHelp()
        const title = HelpPage.title
        expect(title).toHaveText('How do I log into my account?')
        HelpPage.clickOnTransferFunds()
        expect(title).toHaveText('How do I transfer funds?')
        HelpPage.clickOnPayBills()
        expect(title).toHaveText('How do I pay bills?')
    })
})