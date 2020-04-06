import Base from '../Base'

class ResultsPage extends Base {
    get resultsTitle() {
        return $('h2') 
    }
}

export default new ResultsPage()