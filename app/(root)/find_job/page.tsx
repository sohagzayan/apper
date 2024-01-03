import FindJobArea from '@/components/containers/find_job_page/FindJobArea'
import JobSearchForm from '@/components/shared/job-search-form/JobSearchForm'
import React from 'react'

const FindJob = () => {
    return (
        <div>
            <JobSearchForm />
            <FindJobArea />
        </div>
    )
}

export default FindJob