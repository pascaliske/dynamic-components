/**
 * Interface describing a component to be dynamically created.
 */
export interface ComponentManifest {
    componentName: string
    children?: Array<ComponentManifest>
    params?: {
        [key: string]: any
    }
}
