import { NotePencil, Star } from 'phosphor-react';
import VisualzacaoProfessores from '../../assets/VisualizacaoProfessores.svg';
import { TeacherIndividualStars, TeacherMain, TeacherMainProfile, TeacherProfileContent, TeacherProfileLeft, TeacherProfileLeftPhoto, TeacherProfileSeparator, TeacherProfileSkills, TeacherSkillsIndividual } from './style';

export function ViewTeacher() {
    return(
        /* main */
        <TeacherMain>
            {/* img */}
            <img src={VisualzacaoProfessores}/>
            {/* profile */}
            <TeacherMainProfile>
                {/* edit */}
                <NotePencil size={32} opacity={0.5}/>
                {/* content */}
                <TeacherProfileContent>
                    {/* teacher */}
                    <TeacherProfileLeft>
                        {/* profile foto with status */}
                        <TeacherProfileLeftPhoto>
                            <span>Em aulaa</span>
                            <img/>
                        </TeacherProfileLeftPhoto>
                        <p>Chile</p>
                    </TeacherProfileLeft>
                    {/* separator */}
                    <TeacherProfileSeparator></TeacherProfileSeparator>
                    {/* competencias */}
                    <TeacherProfileSkills>
                        <h3>Competências:</h3>
                        {/* competencia */}
                        <TeacherSkillsIndividual>
                            <p>Java</p>
                            {/* stars */}
                            <TeacherIndividualStars>
                                <Star size={35} weight="fill" color="#E8E8E8"/>
                                <Star size={35} weight="fill" color="#E8E8E8"/>
                                <Star size={35} weight="fill" color="#E8E8E8"/>
                                <Star size={35} weight="fill" color="#E8E8E8"/>
                                <Star size={35} weight="fill" color="#E8E8E8"/>
                            </TeacherIndividualStars>
                        </TeacherSkillsIndividual>
                        <TeacherSkillsIndividual>
                            <p>Java</p>
                            {/* stars */}
                            <TeacherIndividualStars>
                                <Star size={35} weight="fill" color="#E8E8E8"/>
                                <Star size={35} weight="fill" color="#E8E8E8"/>
                                <Star size={35} weight="fill" color="#E8E8E8"/>
                                <Star size={35} weight="fill" color="#E8E8E8"/>
                                <Star size={35} weight="fill" color="#E8E8E8"/>
                            </TeacherIndividualStars>
                        </TeacherSkillsIndividual>
                        <TeacherSkillsIndividual>
                            <p>Java</p>
                            {/* stars */}
                            <TeacherIndividualStars>
                                <Star size={35} weight="fill" color="#E8E8E8"/>
                                <Star size={35} weight="fill" color="#E8E8E8"/>
                                <Star size={35} weight="fill" color="#E8E8E8"/>
                                <Star size={35} weight="fill" color="#E8E8E8"/>
                                <Star size={35} weight="fill" color="#E8E8E8"/>
                            </TeacherIndividualStars>
                        </TeacherSkillsIndividual>
                        <TeacherSkillsIndividual>
                            <p>Java</p>
                            {/* stars */}
                            <TeacherIndividualStars>
                                <Star size={35} weight="fill" color="#E8E8E8"/>
                                <Star size={35} weight="fill" color="#E8E8E8"/>
                                <Star size={35} weight="fill" color="#E8E8E8"/>
                                <Star size={35} weight="fill" color="#E8E8E8"/>
                                <Star size={35} weight="fill" color="#E8E8E8"/>
                            </TeacherIndividualStars>
                        </TeacherSkillsIndividual>
                        <TeacherSkillsIndividual>
                            <p>Java</p>
                            {/* stars */}
                            <TeacherIndividualStars>
                                <Star size={35} weight="fill" color="#E8E8E8"/>
                                <Star size={35} weight="fill" color="#E8E8E8"/>
                                <Star size={35} weight="fill" color="#E8E8E8"/>
                                <Star size={35} weight="fill" color="#E8E8E8"/>
                                <Star size={35} weight="fill" color="#E8E8E8"/>
                            </TeacherIndividualStars>
                        </TeacherSkillsIndividual>
                    </TeacherProfileSkills>
                </TeacherProfileContent>
            </TeacherMainProfile>
        </TeacherMain>
    )
}