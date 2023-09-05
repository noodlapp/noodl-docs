import config from '@generated/docusaurus.config'

interface IImportOptions {
    /** Name of import */
    name: string
    /** Image shown in project import */
    thumb: string
    /** Cloudformation, JSON that creates a backend */
    cf?: string
}

export interface ImportIntoNoodlArgs {
    path: string
    options: IImportOptions
}

export function importIntoNoodl(path: string, options: IImportOptions) {
    let query = []
    if (options && options.name !== undefined)
        query.push('name=' + encodeURIComponent(options.name))
    if (options && options.thumb !== undefined)
        query.push(
            'thumb=' +
                encodeURIComponent(
                    location.protocol +
                        '//' +
                        location.host +
                        config.baseUrl +
                        options.thumb
                )
        )
    if (options && options.cf !== undefined)
        query.push(
            'cf=' +
                encodeURIComponent(
                    location.protocol +
                        '//' +
                        location.host +
                        config.baseUrl +
                        '/' +
                        options.cf
                )
        )

    var uri =
        'noodl:import/' +
        location.protocol +
        '//' +
        location.host +
        config.baseUrl +
        path +
        (query.length > 0 ? '?' + query.join('&') : '')

    console.log('Importing into Noodl:', uri)
    console.log(path)

    window.location.href = uri
}
