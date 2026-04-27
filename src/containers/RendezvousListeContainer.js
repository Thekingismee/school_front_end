import { connect } from "react-redux";
import {
    fetchRendezvous,
    updateRendezvousStatus,
    deleteRendezvous
} from "../redux/actions/api";
import RendezvousListe from "../backoffice/pages/RendezvousListe/RendezvousListe";

const mapStateToProps = state => ({
    rendezvous: state.data.api.rendezvous || [],
    pagination: state.data.api.pagination || {},
    availableFilters: state.data.api.filters || {},
    isLoading: state.data.api.isLoadingData?.isLoadingData_FETCH_RENDEZVOUS || false,
    error: state.data.api.error || null
});

const mapDispatchToProps = dispatch => ({
    fetchRendezvous: params => dispatch(fetchRendezvous(params)),
    updateRendezvousStatus: (id, statut, note_admin) => dispatch(updateRendezvousStatus(id, statut, note_admin)),
    deleteRendezvous: id => dispatch(deleteRendezvous(id))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(RendezvousListe);