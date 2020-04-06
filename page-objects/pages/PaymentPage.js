import Base from '../Base'

class PaymentPage extends Base {
    get payeeSelect() {
        return $('#sp_payee')
    }

    get accountSelect() {
        return $('#sp_account')
    }

    get amountInput() {
        return $('#sp_amount')
    }

    get dateInput() {
        return $('#sp_date')
    }

    get descriptionInput() {
        return $('#sp_description')
    }

    get submitButton() {
        return $('#pay_saved_payees')
    }

    get message() {
        return $('#alert_content')
    }

    fillForm(amount, date, desc) {
        this.amountInput.setValue(amount)
        this.dateInput.setValue(date)
        this.descriptionInput.setValue(desc)
    }

    submitForm() {
        this.submitButton.click()
    }
}

export default new PaymentPage()