import pool from './pool';

export default async (sql, params = null) => {
    return new Promise((resolve, reject) => {
        return pool.connect().then(client => {
            return client.query(sql, params).then(result => {
                resolve(result.rows)
            }).catch(error => {
                reject(error)
            })
        })
    })
}

