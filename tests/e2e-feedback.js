import App from '../page-objects/App'
import FeedbackPage from '../page-objects/pages/FeedbackPage'

describe('E2E - Feedback', () => {
    it('Should load feecback form', () => {
        App.openFeedbackPage()
        FeedbackPage.formIsVisible()
    })

    it('Should submit feedback form', () => {
        FeedbackPage.fillForm('Eric', 'ericjon97@gmail.com', 'my subject', 'My message')
        FeedbackPage.submitForm()
        expect(browser).toHaveUrl('http://zero.webappsecurity.com/sendFeedback.html')
    })
})