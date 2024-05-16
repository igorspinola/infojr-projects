import './styles.scss';

function Skills() {
    return (
        <div id='skills'>
            <hr/>
            <h2>Skills</h2>
            <section>
                <table>
                    <caption>Front-End</caption>
                    
                    <colgroup>
                        <col className="habilidade"/>
                        <col className="nivel"/>
                    </colgroup>

                    <tr>
                        <td>Figma</td>
                        <td>⭐️⭐️⭐️⭐️</td>
                    </tr>
                    <tr>
                        <td>HTML / CSS</td>
                        <td>⭐️⭐️⭐️⭐️</td>
                    </tr>
                    <tr>
                        <td>JavaScript</td>
                        <td>⭐️⭐️⭐️</td>
                    </tr>
                    <tr>
                        <td>React</td>
                        <td>⭐️⭐️</td>
                    </tr>
                </table>

                <table>
                    <caption>Back-End</caption>

                    <colgroup>
                        <col className="habilidade"/>
                        <col className="nivel"/>
                    </colgroup>

                    <tr>
                        <td>SQL</td>
                        <td>⭐️⭐️⭐️</td>
                    </tr>
                    <tr>
                        <td>Python</td>
                        <td>⭐️⭐️⭐️⭐️</td>
                    </tr>
                    <tr>
                        <td>Node.JS</td>
                        <td>⭐️</td>
                    </tr>
                    <tr>
                        <td>Django</td>
                        <td>⭐️</td>
                    </tr>
                </table>

                <table>
                    <caption>Idiomas</caption>

                    <colgroup>
                        <col className="habilidade"/>
                        <col className="nivel"/>
                    </colgroup>

                    <tr>
                        <td>Inglês</td>
                        <td>⭐️⭐️⭐️⭐️⭐️</td>
                    </tr>
                    <tr>
                        <td>Italiano</td>
                        <td>⭐️⭐️⭐️⭐️⭐️</td>
                    </tr>
                    <tr>
                        <td>Espanhol</td>
                        <td>⭐️⭐️⭐️</td>
                    </tr>
                    <tr>
                        <td>Francês</td>
                        <td>⭐️⭐️⭐️</td>
                    </tr>
                </table>
            </section>

        </div>
    )
};

export default Skills;