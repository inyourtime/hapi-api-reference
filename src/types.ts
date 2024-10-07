import { ReferenceConfiguration } from '@scalar/types'

export type HapiApiReferenceOptions = {
  /**
   * Prefix the route with a path. This is where the API Reference will be available.
   * @default "/reference"
   */
  prefix?: string;
  /**
   * The universal configuration object for @scalar/api-reference.
   *
   * Read more: https://github.com/scalar/scalar
   */
  configuration?: ReferenceConfiguration;
}
