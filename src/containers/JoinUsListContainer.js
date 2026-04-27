import { connect } from "react-redux";
import {
    fetchCandidatures,
    updateCandidatureStatus,
    deleteCandidature
} from "../redux/actions/api";
import JoinUsList from "../backoffice/pages/JoinUsList/JoinUsList";

const mapStateToProps = state => ({
    candidatures: state.data.api.candidatures || [],
    pagination: state.data.api.pagination || {},
    availableFilters: state.data.api.filters || {},
    isLoading: state.data.api.isLoadingData?.isLoadingData_FETCH_CANDIDATURES || false,
    error: state.data.api.error || null
});

const mapDispatchToProps = dispatch => ({
    fetchCandidatures: params => dispatch(fetchCandidatures(params)),
    updateCandidatureStatus: (id, statut, note_recruteur) => dispatch(updateCandidatureStatus(id, statut, note_recruteur)),
    deleteCandidature: id => dispatch(deleteCandidature(id))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(JoinUsList);