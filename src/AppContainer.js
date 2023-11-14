import {connect} from "react-redux";
import App from "./App";
import {uiWidthSet} from './Actions/UI'

function mapStateToProps(state) {
    return{
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actionUiWidthSet: width => dispatch(uiWidthSet(width))
    }
}

export default (connect(mapStateToProps, mapDispatchToProps) (App))