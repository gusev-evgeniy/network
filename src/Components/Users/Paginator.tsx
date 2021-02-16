import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getFilter, getTotalCount } from '../../Selectors/Selectors'
import { requestUsers } from './UsersReducer'

type PropsType = {
  currentPage: number
  usersOnPage: number
}

const Paginator: React.FC<PropsType> = React.memo(
  ({ currentPage, usersOnPage }) => {
    const totalCount = useSelector(getTotalCount)
    const filter = useSelector(getFilter)

    const dispatch = useDispatch()

    const [firstPage, setFirstPage] = useState(1)

    useEffect(() => {
      if (currentPage === 1) {
        setFirstPage(1)
      }
    }, [currentPage])

    const totalPages = Math.ceil(totalCount / usersOnPage)
    const paginatorLength = Math.min(totalPages, 10)
    const submitNewPage = (page: number) => {
      dispatch(requestUsers(page, usersOnPage, filter.term, filter.friend))
    }

    let paginator = [...Array(paginatorLength).keys()]
      .map((a, i) => i + firstPage)
      .map((page) => {
        return (
          <li
            key={page}
            className={
              currentPage === page ? 'waves-effect active' : 'waves-effect'
            }
          >
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <a
              href='#'
              onClick={() => submitNewPage(page)}
              className='pageSelector'
            >
              {page}
            </a>
          </li>
        )
      })

    const showNextPagesButton = () => {
      const newPage = Math.min(firstPage + paginatorLength, totalPages)
      setFirstPage(newPage)
      submitNewPage(newPage)
    }

    const showPrevPagesButton = () => {
      const newPage = Math.max(firstPage - paginatorLength, 1)
      setFirstPage(newPage)
      submitNewPage(newPage)
    }

    return (
      <ul className='pagination'>
        {currentPage > paginatorLength && (
          <li className='waves-effect'>
            <i className='material-icons' onClick={showPrevPagesButton}>
              chevron_left
            </i>
          </li>
        )}
        {paginator}
        {currentPage < totalPages - paginatorLength && (
          <li className='waves-effect'>
            <i className='material-icons' onClick={showNextPagesButton}>
              chevron_right
            </i>
          </li>
        )}
      </ul>
    )
  }
)

export default Paginator
