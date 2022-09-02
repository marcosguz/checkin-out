const { Registration } = require('../models/registration.model')

const getAllRegister = async (req, res) => {
    try {

        const register = await Registration.findAll()

        res.status(200).json({
            status: 'success',
            data: { register }
        })

    } catch (error) {
        console.log(error)
    }
}

const getIdRegister = async (req, res) => {
    try {

        const { id } = req.params

        const register = await Registration.findOne({ where: { id } })

        if (!register) {
            return res.status(404).json({
                status: 'error',
                message: 'Register not found'
            })
        }

        res.status(200).json({
            status: 'success',
            data: { register }
        })

    } catch (error) {
        console.log(error)
    }
}

const createRegister = async (req, res) => {
    try {

        const { entranceTime } = req.body

        const newRegister = await Registration.create({ entranceTime })

        res.status(201).json({
            status: 'success',
            data: { newRegister }
        })

    } catch (error) {
        console.log(error)
    }
}

const updateRegister = async (req, res) => {
    try {

        const { id } = req.params
        const { exitTime } = req.body

        const register = await Registration.findOne({ where: { id } })

        if (!register) {
            return res.status(404).json({
                status: 'error',
                message: 'register not found'
            })
        }

        await register.update({ status: 'out', exitTime })

        res.status(200).json({
            status: 'success',
            data: { register }
        })

    } catch (error) {
        console.log(error)
    }
}

const deleteRegister = async (req, res) => {
    try {

        const { id } = req.params

        const register = await Registration.findOne({ where: { id } })

        if (!register) {
            return res.status(404).json({
                status: 'error',
                message: 'Register not found'
            })
        }

        await register.update({ status: 'canceled' })

        res.status(200).json({
            status: 'success'
        })

    } catch (error) {
        console.log(error)
    }
}

module.exports = {
    getAllRegister,
    getIdRegister,
    createRegister,
    updateRegister,
    deleteRegister
}