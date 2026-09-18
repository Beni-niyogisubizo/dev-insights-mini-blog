/* oxlint-disable react/only-export-components */

import { useEffect } from 'react'
import type { ComponentType } from 'react'

function withLogger<P extends object>(
  WrappedComponent: ComponentType<P>,
  componentName: string,
) {
  function ComponentWithLogger(props: P) {
    useEffect(() => {
      console.log(`${componentName} mounted`)

      return () => {
        console.log(`${componentName} unmounted`)
      }
    }, [])

    return <WrappedComponent {...props} />
  }

  ComponentWithLogger.displayName = `withLogger(${componentName})`

  return ComponentWithLogger
}

export default withLogger
