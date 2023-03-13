import React from 'react'
import PropTypes from 'prop-types'
import Router from 'next/router'
import NProgress from 'nprogress'

class NextProgress extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            timer: null,
        }
    }

    routeChangeStart(_, { shallow }) {
        if (!shallow || this.props.showOnShallow) {
            NProgress.set(this.props.startPosition)
            NProgress.start()
        }
    }

    routeChangeEnd(_, { shallow }) {
        if (!shallow || this.props.showOnShallow) {
            clearTimeout(this.state.timer)
            this.setState({
                timer: setTimeout(() => {
                    NProgress.done(true)
                }, this.props.stopDelayMs),
            })
        }
    }

    render() {
        const { color, height } = this.props

        return (
            <style jsx global>{`
                #nprogress {
                    pointer-events: none;
                }
                #nprogress .bar {
                    background: ${color};
                    position: fixed;
                    z-index: 99999;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: ${height}px;
                    opacity: 1;
                }
                #nprogress .peg {
                    display: block;
                    position: absolute;
                    right: 0px;
                    width: 100px;
                    height: 100%;
                    box-shadow: 0 0 10px ${color}, 0 0 5px ${color};
                    opacity: 1;
                    -webkit-transform: rotate(3deg) translate(0px, -4px);
                    -ms-transform: rotate(3deg) translate(0px, -4px);
                    transform: rotate(3deg) translate(0px, -4px);
                }
                .nprogress-custom-parent {
                    overflow: hidden;
                    position: relative;
                }
                .nprogress-custom-parent #nprogress .bar {
                    position: absolute;
                }
            `}</style>
        )
    }

    componentDidMount() {
        const { options } = this.props

        if (options) {
            NProgress.configure(options)
        }

        Router.events.on('routeChangeStart', this.routeChangeStart.bind(this))
        Router.events.on('routeChangeComplete', this.routeChangeEnd.bind(this))
        Router.events.on('routeChangeError', this.routeChangeEnd.bind(this))
    }

    componentWillUnmount() {
        Router.events.off('routeChangeStart', this.routeChangeStart.bind(this))
        Router.events.off('routeChangeComplete', this.routeChangeEnd.bind(this))
        Router.events.off('routeChangeError', this.routeChangeEnd.bind(this))
    }
}

NextProgress.propTypes = {
    color: PropTypes.string,
    startPosition: PropTypes.number,
    stopDelayMs: PropTypes.number,
    height: PropTypes.number,
    showOnShallow: PropTypes.bool,
    options: PropTypes.object,
}
NextProgress.defaultProps = {
    color: "#3AAFA9",
    startPosition: 0.3,
    stopDelayMs: 200,
    height: 3,
    showOnShallow: true,
}

export default NextProgress
