// A class for the conditional find operation
class APIFeatures {
    constructor(query, queryString) {
        this.query = query
        this.queryString = queryString  
    }

    filter() {
        // 1A) Filtering
        const queryObj = {...this.queryString}
        const excludeFields = ['page', 'sort', 'limit', 'fields']
        excludeFields.forEach(el => delete queryObj[el])

        // 1B) Advanced filtering
        let queryStr = JSON.stringify(queryObj)
        // convert <field>: gte => <field>: $gte 
        queryStr = queryStr.replace(/\b(gte|gt|lte|lt)\b/g, match => `$${match}`)

        this.query.find(JSON.parse(queryStr))
        
        return this
    }
    sort() {
        // 2) Sorting
        if(this.queryString.sort) {
            const sortBy = this.queryString.sort.split(',').join(' ')
            this.query.sort(sortBy)
        } else {
            this.query.sort('id')
        }

        return this
    }
    limitFields() {
        // 3) Limiting Field
        if (this.queryString.fields) {
            const fields = this.queryString.fields.split(',').join(' ')
            // fields=name, gender ... 
            this.query.select(fields)
        } else {
            this.query.select('-__v')
        }
        return this
    }
    paginate() {
        // 4) Pagination
        const page = this.queryString.page * 1 || 1;
        const limit = this.queryString.limit * 1 || 100
        const skip = (page - 1) * limit
        // (page=3&limit=10) => 1-10 page 1, 11-20 page 2, 21-30 page 3
        this.query = this.query.skip(skip).limit(limit)

        return this;
    }
}

module.exports = APIFeatures;
