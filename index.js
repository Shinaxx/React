import Teacher, {promote} from "./teacher";
import React, { component } from 'react';

// Default - import ... from '';
// Named -> import { ... } from '';

const teacher = new Teacher("John", "MSc");
teacher.teach();
