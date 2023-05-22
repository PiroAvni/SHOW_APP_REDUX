const initialState ={
    shows:[],
    IsLoading:false,
    error:null,
}


const showsReducer = (state = initialState, action) => {
    switch (action.type) {
      case "FETCH_SHOWS_REQUEST":
          return {
             ...state, 
             isLoading: true, 
             error:null 
    };
    case 'FETCH_SHOWS_SUCCESS':
        return{
            ...state,
            loading:false,
            shows:action.payload
        };
        case 'FETCH_SHOWS_FAILED':
        return{
            ...state,
            loading:false,
            error:action.payload
        };
      default:
        return state;
    }
  }
  
  export default showsReducer;