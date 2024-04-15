

import { NextApiRequest, NextApiResponse } from 'next';
import ProjectModel from '../models/project';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    try {
      const projects = await ProjectModel.find({});
      res.status(200).json(projects);
    } catch (error) {
      res.status(500).json({ message: 'Internal Server Error' });
    }
  } else if (req.method === 'POST') {
    try {
      const newProject = req.body; // Assuming request body contains project data
      const project = new ProjectModel(newProject);
      await project.save();
      res.status(201).json(project);
    } catch (error) {
      res.status(500).json({ message: 'Internal Server Error' });
    }
  } else if (req.method === 'DELETE') {
    try {
      const { id } = req.query; // Assuming the project ID is passed as a query parameter
      if (!id) {
        res.status(400).json({ message: 'Project ID is required' });
        return;
      }
      await ProjectModel.findByIdAndDelete(id);
      res.status(204).end(); // No content to send back after successful deletion
    } catch (error) {
      res.status(500).json({ message: 'Internal Server Error' });
    }
  } else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
}
