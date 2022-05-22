import React, { useState } from 'react'
import { useQuery } from 'react-query';

function Pagination(): JSX.Element{
    const [page, setPage] = useState(1);

    const fetchPlanets = async (page: number) => {
      const res = await fetch(`https://hn.algolia.com/api/v1/search?query=`);
      return res.json();
    }
    
    // const {
    //     isLoading,
    //     isError,
    //     error,
    //     data,
    //     isFetching,
    //     isPreviousData
    //   } = useQuery(['search', page], () => fetchPlanets(page), { keepPreviousData: true });




    return(
        <><div className='nav btn-container'>
            <button
                onClick={() => setPage(prevState => Math.max(prevState - 1, 0))}
                disabled={page === 1}
            >Prev Page</button>

            <button
                onClick={() => setPage(prevState => prevState + 1)}
            >Next Page</button>
        </div>
        </>
    
    );

}

export default Pagination;