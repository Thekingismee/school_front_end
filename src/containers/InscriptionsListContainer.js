import { connect } from "react-redux";
import {
    fetchInscriptions,
    updateInscriptionStatus,
    deleteInscription
} from "../redux/actions/api";
import InscriptionsList from "../backoffice/pages/InscriptionsList/InscriptionsList";

const mapStateToProps = state => ({
    inscriptions: state.data.api.inscriptions || [],
    pagination: state.data.api.pagination || {},
    availableFilters: state.data.api.filters || {},
    isLoading: state.data.api.isLoadingData?.isLoadingData_FETCH_INSCRIPTIONS || false,
    error: state.data.api.error || null
});

const mapDispatchToProps = dispatch => ({
    fetchInscriptions: params => dispatch(fetchInscriptions(params)),
    updateInscriptionStatus: (id, statut, note_admin) => dispatch(updateInscriptionStatus(id, statut, note_admin)),
    deleteInscription: id => dispatch(deleteInscription(id))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(InscriptionsList);
