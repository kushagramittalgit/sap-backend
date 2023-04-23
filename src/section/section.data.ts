import { Standard } from '../standard/schemas/standard.schema';
import { Common } from '../common';
import { Section  } from './schemas';
import {SectionType } from './types'

const createSection = async (section: SectionType) => {
    const newSection = new Section(section);
    const connection = await Common.Mongo.getConnection();
    return newSection.save();
  };

  const getSectionByID = async (SectionId: string) => {
    const connection = await Common.Mongo.getConnection();
    return await Standard.findById(SectionId);
  };

  const getSectionByName = async (sectionname: string) => {
    const connection = await Common.Mongo.getConnection();
    return await Section.findOne({section_name : sectionname});
  };

  const getSection = async () => {
    const connection = await Common.Mongo.getConnection();
    return await Section.find();
  };
  
  const deleteSection = async (SectionId: string) => {
    const connection = await Common.Mongo.getConnection();
    return await Section.findByIdAndDelete(SectionId);
  };
  

  
export const SectionData = {
   createSection,
   getSectionByID,
   getSectionByName,
   getSection,
   deleteSection
};