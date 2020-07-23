import express from "express";
import BaseController from "../utils/BaseController";
import { houseService } from "../services/HouseService";

export class HousesController extends BaseController {
  constructor() {
    super("api/houses");
    this.router
      .get("", this.getAll)
      .post("", this.create)
      .post("/:id/person", this.addPerson)
      .delete("/:id", this.delete)
      .delete("/:id/person/:personId", this.movinOut);
  }
  async getAll(req, res, next) {
    try {
      let data = await houseService.getAll();
      return res.send(data);
    } catch (error) {
      next(error);
    }
  }
  async create(req, res, next) {
    try {
      let data = await houseService.create(req.body);
      res.send(data);
    } catch (error) {
      next(error);
    }
  }
  async delete(req, res, next) {
    try {
      await houseService.delete(req.params.id);
      res.send("deleted");
    } catch (error) {
      next(error);
    }
  }
  async addPerson(req, res, next) {
    try {
      let person = await houseService.addPerson(req.params.id, req.body);
      if (person) {
        return res.send(person);
      }
    } catch (error) {
      next(error);
    }
  }
  async movinOut(req, res, next) {
    try {
      let move = await houseService.movinOut(
        req.params.id,
        req.params.personId
      );
      if (move) {
        res.send("he gone");
      }
    } catch (error) {
      next(error);
    }
  }
}
