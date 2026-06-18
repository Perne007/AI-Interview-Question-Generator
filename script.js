const questions = {

    java: [
        "What is JVM?",
        "Difference between JDK and JRE?",
        "What is OOP?",
        "What is Multithreading?",
        "What is Exception Handling?",
        "What is Garbage Collection?",
        "What is Collection Framework?",
        "What is Abstraction?",
        "What is Polymorphism?",
        "What is Encapsulation?"
    ],

    spring: [
        "What is Spring Boot?",
        "What is Dependency Injection?",
        "What is REST API?",
        "What is Microservices Architecture?",
        "What is Spring Security?",
        "What is JPA?",
        "What is Hibernate?",
        "What is Bean?",
        "What is Spring MVC?",
        "What is Auto Configuration?"
    ],

    react: [
        "What is React?",
        "What is Virtual DOM?",
        "What is JSX?",
        "What are React Hooks?",
        "What is useState?",
        "What is useEffect?",
        "What are Props?",
        "What is State?",
        "What is Component Lifecycle?",
        "What is Redux?"
    ],

    aws: [
        "What is EC2?",
        "What is S3?",
        "What is RDS?",
        "What is Lambda?",
        "What is IAM?",
        "What is Auto Scaling?",
        "What is CloudWatch?",
        "What is ECS?",
        "What is Route 53?",
        "What is VPC?"
    ]
};

function generateQuestions() {

    let tech =
        document.getElementById("technology").value;

    let difficulty =
        document.getElementById("difficulty").value;

    let list = questions[tech];

    let shuffled =
        [...list].sort(() => 0.5 - Math.random());

    let selected =
        shuffled.slice(0, 5);

    let score =
        Math.floor(Math.random() * 21) + 80;

    document.getElementById("output").innerHTML =

        `
        <h2>🤖 AI Generated Questions</h2>

        <p>
            Technology:
            <strong>${tech.toUpperCase()}</strong>
            |
            Difficulty:
            <strong>${difficulty}</strong>
        </p>

        <ol>
            ${selected.map(q =>
                `<li>${q}</li>`
            ).join("")}
        </ol>

        <div class="tip-box">

            <h3>💡 AI Preparation Tip</h3>

            <p>
                Practice explaining each answer with
                real-world examples and project experience.
            </p>

        </div>

        <div class="score-box">

            <h3>📊 Interview Readiness Score</h3>

            <p>
                Estimated Readiness:
                <strong>${score}%</strong>
            </p>

        </div>
    `;
}