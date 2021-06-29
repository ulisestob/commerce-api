import { Container } from 'inversify'
import { APIError } from 'src/utils/errorHandler'
import TYPES from 'src/constants/di'
import MongoModels from 'src/models'
import MongoConnection from 'src/core/mongo'
import configs from 'src/config'
import jwt from 'jwt-simple'
import paginate from 'src/utils/paginate'

// Declare DI Container
const container = new Container()

// Binding Dependencies
container.bind(TYPES.API_ERROR).toConstructor(APIError)
container.bind(TYPES.MONGO_MODELS).toConstantValue(MongoModels)
container.bind(TYPES.MONGO_CONNECTION).toConstantValue(MongoConnection)
container.bind(TYPES.CONFIGS).toConstantValue(configs)
container.bind(TYPES.JWT).toConstantValue(jwt)
container.bind(TYPES.PAGINATE).toConstantValue(paginate.paginate)

// Services

export default container