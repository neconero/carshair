
import swaggerAutogen from 'swagger-autogen'

const outputFile = './swagger_output.json'
const endpointsFiles = ['./src/index.ts']

const doc = {
    info: {
        version: '',      // by default: '1.0.0'
        title: '',        // by default: 'REST API'
        description: '',  // by default: ''
    },
    host: '8080',      // by default: 'localhost:3000'
    basePath: '',  // by default: '/'
    schemes: [],   // by default: ['http']
    consumes: [],  // by default: ['application/json']
    produces: [],  // by default: ['application/json']
    tags: [        // by default: empty Array
        {
            name: '',         // Tag name
            description: '',  // Tag description
        },
        // { ... }
    ],
    securityDefinitions: {},  // by default: empty object (Swagger 2.0)
    definitions: {},          // by default: empty object
    components: {}            // by default: empty object (OpenAPI 3.x)
};

swaggerAutogen()(outputFile, endpointsFiles, doc)