export interface SkillContent {
  name: string;
  icon?: any;
}

export interface SkillChunk {
  title: string;
  content: Array<SkillContent>;
}
