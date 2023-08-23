const { Request, Response } = require("express");
const albumService = require("../services/album.service");
const {
  SuccessArrayResponse,
  SuccessResponse,
} = require("../utils/success.response");

const albumController = {
  /**
   * Get All
   * @param {Request} req
   * @param {Response} res
   */
  getAll: async (req, res) => {
    const { offset, limit } = req.pagination;
    const { albums, count } = await albumService.getAll(offset, limit);
    res.status(200).json(new SuccessArrayResponse(albums, count));
  },

  /**
   * Get By Id
   * @param {Request} req
   * @param {Response} res
   */
  getById: async (req, res) => {
    const { id } = req.params;
    const album = await albumService.getById(id);
    if (!album) {
      res.sendStatus(404);
      return;
    }
    res.status(200).json(new SuccessResponse(album));
  },

  /**
   * Create
   * @param {Request} req
   * @param {Response} res
   */
  create: async (req, res) => {
    const data = req.body;
    const album = await albumService.create(data);
    res.location("/album/" + album.id);
    res.status(201).json(new SuccessResponse(album, 201));
  },

  /**
   * Update
   * @param {Request} req
   * @param {Response} res
   */
  update: async (req, res) => {
    const { id } = req.params;
    const data = req.body;
    const isUpdated = await albumService.update(id, data);
    if (!isUpdated) {
      res.sendStatus(404);
      return;
    }
    res.sendStatus(204);
  },

  /**
   * Delete
   * @param {Request} req
   * @param {Response} res
   */
  delete: async (req, res) => {
    const { id } = req.params;
    const isDeleted = await albumService.delete(id);
    if (!isDeleted) {
      res.sendStatus(404);
      return;
    }
    res.sendStatus(204);
  },
};

module.exports = albumController;
