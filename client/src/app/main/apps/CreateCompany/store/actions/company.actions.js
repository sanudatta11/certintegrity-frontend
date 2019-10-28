import axios from 'axios';

export const GET_COMPANY_DETAIL='GET_COMPANY_DETAIL';
export const POST_COMPANY_DETAIL='POST_COMPANY_DETAIL';

export function getCompanyDetail()
{
    const request = axios.get('/api/company');

    return (dispatch) =>
        request.then((response) =>
            dispatch({
                type   : GET_COMPANY_DETAIL,
                payload: response.data
            })
        );
   
}
export const postCompanyDetail=(data)=>(dispatch)=>{
    
    axios.post('/api/company',data).then(res=>
        dispatch({
            type:POST_COMPANY_DETAIL,
           payload:res.data
        })).catch((e)=>console.log(e));
       
}
