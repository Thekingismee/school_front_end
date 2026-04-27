import { connect } from "react-redux";
import {
    fetchMessages,
    updateMessageStatus,
    deleteMessage
} from "../redux/actions/api";
import MessagesList from "../backoffice/pages/MessagesList/MessagesList";

const mapStateToProps = state => ({
    messages: state.data.api.messages || [],
    pagination: state.data.api.pagination || {},
    availableFilters: state.data.api.filters || {},
    isLoading: state.data.api.isLoadingData?.isLoadingData_FETCH_MESSAGES || false,
    error: state.data.api.error || null
});

const mapDispatchToProps = dispatch => ({
    fetchMessages: params => dispatch(fetchMessages(params)),
    updateMessageStatus: (id, statut, reponse_admin) => dispatch(updateMessageStatus(id, statut, reponse_admin)),
    deleteMessage: id => dispatch(deleteMessage(id))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(MessagesList);