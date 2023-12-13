'use client'

import { LoadingContainer, Loader } from "./loading.styles"

export default function Loading () {

    return (
        <>
          <LoadingContainer>
              <Loader></Loader>
          </LoadingContainer>
        </>
    )
}