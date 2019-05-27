import {connect} from 'react-redux'
import OnlineBook from '../component/BookContent/OnlineBook'
import { openModalAction } from '../reducer/OnlineBook'

const mapStateToProps = state => {
  const { isOpenModalReducer } = state
  return {
    isOpenModalReducer,
  }
}
const mapDispatchToProps = dispatch => {
  return {
    change : function() {
      const action = openModalAction()
      dispatch(action)
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps )(OnlineBook)