import React from 'react'
import styles from './style.module.scss'
import cx from 'classnames'
import PropTypes from 'prop-types'

const Section = props => {
    const { children, className, id, varian } = props
    let bgc = ''
    switch (varian) {
        case 'primary':
            bgc = styles.section_primary
            break
        default:
            bgc = ''
            break
    }
    return (
        <section
            className={cx(styles.section, bgc)}
            id={id}
            style={props.style || {}}>
            {props.decoration && props.decoration.length > 0
                ? props.decoration.map((val, key) => {
                      return (
                          <div style={val.style} key={key}>
                              <img src={val.url} alt="decoration" />
                          </div>
                      )
                  })
                : null}
            <div className={cx(styles.section_container, className)}>
                {children}
            </div>
        </section>
    )
}

Section.propTypes = {
    children: PropTypes.element,
    className: PropTypes.string,
    id: PropTypes.string,
    variant: PropTypes.string,
    decoration: PropTypes.array,
    varian: PropTypes.string,
    style: PropTypes.object,
}

export default Section
