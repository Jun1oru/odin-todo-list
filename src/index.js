import load from './initialPage.js';
import "./styles.css";
import { createProjectDebug } from './sidebar/projects.js';

load();
createProjectDebug('Test', 'Description', 'High', '2024-03-08');