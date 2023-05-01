import React, { useState } from 'react';
import TableCampaign from './TableCampaign';
import '../styles/Table.css';
import { HiOutlineArrowNarrowLeft, HiOutlineArrowNarrowRight } from 'react-icons/hi';
import ReactPaginate from 'react-paginate';
import NoTableFound from './NoTableFound';
// import CreateCampaign from './CreateCampaign';

const Table = ({ campaigns, isLoading, search, setSearch }) => {

    const [pageNumber, setPageNumber] = useState(0);
    const campaignPerPage = 6;

    const pagesVisited = pageNumber * campaignPerPage;

    const displayCampaigns = !campaigns ? <NoTableFound /> : campaigns.filter((item) => {
        if(search === '') {
            return item
        } else if (item.subject === null){
            return item
        } 
        else if(item.subject.toLowerCase().includes(search.toLowerCase())) {
            return item
        }
        else {
            return 'No campaign with such subject'
        }
    })
    .map((campaign, index) => {
        return ( 
            <TableCampaign campaign={campaign} key={index} isLoading={isLoading} />
        )
    })
    .slice(pagesVisited, pagesVisited + campaignPerPage)
    

    const pageCount = Math.ceil(campaigns.length / campaignPerPage)

    const handlePageChange = ({ selected }) => {
        setPageNumber(selected)
    };

    return (
        <div className='table'>
            <div className='table-wrapper'>
                <div className='table-container'>
                    <input type='checkbox' /><p>Campaign Name</p>
                </div>
                <div className='table-others'>
                    <p>Status</p>
                    <p>Audience</p>
                    <p>Launch Date</p>
                    <p>Last Modified</p>
                </div>
            </div>
            <div className='table-data'>
                {displayCampaigns}
                <ReactPaginate
                    breakLabel='...'
                    previousLabel={<HiOutlineArrowNarrowLeft />}
                    nextLabel={<HiOutlineArrowNarrowRight />}
                    pageCount={pageCount}
                    onPageChange={handlePageChange}
                    containerClassName={'paginationBtns'}
                    previousLinkClassName={'previousBtn'}
                    nextLinkClassName={'nextBtn'}
                    disabledClassName={'disabledBtn'}
                    activeClassName={'activeBtn'}
                />
            </div>
        </div>
    )
}

export default Table;
