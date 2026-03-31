import { push, replace } from "connected-react-router";
import { connect } from "react-redux";
import {
    sendTraiterDossierSALAFIN,
    clearTraiterDossierSALAFIN
} from "../../../redux/actions/api";
import SmartAnalysisNvCreditSalafin from "../../../components/Tandem/SmartAnalysisNV/SmartAnalysisNvCreditSalafin";

const mapStateToProps = state => ({
    etablissementSelected: state.data.api.etablissementSelected,
    isLoading:
        state.data.api.isLoadingData &&
        (state.data.api.isLoadingData
                .isLoadingData_SEND_TRAITER_DOSSIER_BOA_CREDIT),
    folderSendedSALAFIN: state.data.api.data_TRAITER_DOSSIER_SALAFIN
});

const mapDispatchToProps = dispatch => ({
    goToUrl: url => dispatch(push(url)),
    sendTraiterDossierSALAFIN: data => dispatch(sendTraiterDossierSALAFIN(data)),
    clearTraiterDossierSALAFIN: () => dispatch(clearTraiterDossierSALAFIN())
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SmartAnalysisNvCreditSalafin);
