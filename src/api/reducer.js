const reducer = (state, action) => {
    switch (action.type) {
        //accounts
        case 'LOAD_ALLACCOUNTS':
            return { ...state, allaccountsState: 'LOAD_ALLACCOUNTS', allAccounts:null};

        case 'SET_ALLACCOUNTS':
            return { ...state, allAccounts: action.payload, allaccountsState: 'READY' };

        case 'ALLACCOUNTS_ERROR':
            return { ...state, allAccounts: null, allaccountsState: 'ERROR' };


        case 'SERVICE_LIST':
            return { ...state, serviceList: action.payload };
        case 'RELOAD_SERVICE_LIST':
            return { ...state, reloadList: action.payload };

        case 'SHOW_ERROR':
            return { ...state, errorTips: action.payload };

        case 'SET_LOADING':
            return { ...state, loading: action.payload };


        default:
            throw new Error(`Unknown type: ${action.type}`);
    }
};
export default reducer
