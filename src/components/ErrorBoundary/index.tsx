'use client'

import { Component, ErrorInfo, Fragment, ReactNode } from 'react'

import { Footer } from 'store@components/Footer'
import { Header } from 'store@components/Header'

import Error500Icon from './500-icon.svg'

type ErrorBoundaryState = {
  hasError: boolean
}

export class ErrorBoundary extends Component<
  React.PropsWithChildren,
  ErrorBoundaryState
> {
  state: ErrorBoundaryState = {
    hasError: false
  }

  static getDerivedStateFromError(): ErrorBoundaryState {
    return {
      hasError: true
    }
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
    // this.setState(this.getDerivedStateFromError(error))

    console.log('Client side error occurred: ', { error, errorInfo })
  }

  render(): ReactNode {
    if (this.state.hasError) {
      return (
        <div className="~w-full block">
          <Header />
          <div className="w-full h-screen flex flex-col lg:flex-row items-center justify-center space-y-16 lg:space-y-0 space-x-8 2xl:space-x-0">
            <div className="w-full lg:w-1/2 flex flex-col items-center justify-center lg:px-2 xl:px-0 text-center">
              <p className="text-7xl md:text-8xl lg:text-9xl font-bold tracking-wider text-gray-300">
                500
              </p>
              <p className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-wider text-gray-300 mt-2">
                Erro interno no servidor
              </p>
              <p className="text-lg md:text-xl lg:text-2xl text-gray-500 my-6">
                Whoops, algo correu mal com a requisição.
              </p>
              <p className="text-lg md:text-xl lg:text-2xl text-gray-500">
                Tente novamente mais tarde.
              </p>
            </div>
            <div className="w-1/2 lg:h-full flex lg:items-center justify-center p-4">
              <Error500Icon />
            </div>
          </div>
          <Footer />
        </div>
      )
    }

    return <Fragment>{this.props.children}</Fragment>
  }
}
