export const categoryBanner: CategoryBanner = {
  frontend: {
    title: 'Front-End',
    content:
      '프론트엔드 개발자는 백엔드 API에서 가져온 데이터의 출력, 입력을 통한 비즈니스 로직 구성과 사용자와 대화하는 사용자 인터페이스 부분을 작업하는 개발자를 말해요.',
    src: '/assets/images/banner/frontend.png',
  },
  backend: {
    title: 'Back-End',
    content:
      '백엔드는 웹 애플리케이션의 사용자가 보지 못하는 영역인 서버나 데이터베이스를 관리해요. 데이터를 관리하거나 서버를 운영하는 일을 한답니다.',
    src: '/assets/images/banner/backend.png',
  },
  devops: {
    title: 'Dev Ops',
    content:
      '데브옵스는 소프트웨어의 개발과 운영의 합성어로서, 소프트웨어 개발자와 정보기술 전문가 간의 소통, 협업 및 통합을 강조하는 개발 환경이나 문화를 말해요.',
    src: '/assets/images/banner/devops.png',
  },
  mobile: {
    title: 'Mobile',
    content:
      '모바일 개발자는 스마트폰에서 가동되는 앱 프로그램을 개발하고 개발된 프로그램에 대한 오류를 수정하고 새로운 버전의 프로그램을 개발하는 일을 해요.',
    src: '/assets/images/banner/mobile.png',
  },
  datascience: {
    title: 'Data Science',
    content:
      '데이터 사이언스는 분석 방법, 도메인 전문성 및 기술의 융합을 통해 데이터에서 패턴을 찾고, 추출하고, 표면화하는 것을 말해요.',
    src: '/assets/images/banner/datascience.png',
  },
};

export const tagByCategory: TagValue = {
  frontend: [
    'javascript',
    'nextjs',
    'preact',
    'react',
    'react-native',
    'react-query',
    'accessibility',
    'appwrite',
    'blazor',
    'bootstrap-css',
    'css',
    'chrominum',
    'elm',
    'emberjs',
    'firebase',
    'firefox',
    'gatsby',
    'google-chrome',
    'graphql',
    'grpc',
    'html',
    'jamstack',
    'javascript',
    'jquery',
    'microsoft-edge',
    'nestjs',
    'nodejs',
  ],
  backend: [
    '.net',
    'apache-camel',
    'architecture',
    'aspnet',
    'ballerina',
    'big-data',
    'bots',
    'c',
    'clojure',
    'cms',
    'dart',
    'deno',
    'digitalOcean',
    'django',
    'elixir',
    'golang',
    'graphql',
    'grpc',
    'haskell',
    'hotwire',
    'java',
    'javascript',
    'kotlin',
    'ktor',
    'laravel',
    'lightbend',
    'lisp',
    'lua',
    'nodejs',
    'openapi',
    'perl',
    'php',
  ],
  devops: ['architecture', 'cicd', 'containers', 'docker'],
  mobile: ['android', 'dart', 'flutter', 'ios', 'ionic', 'nativescript', 'react-native', 'swift'],
  datascience: [
    'ai',
    'aiops',
    'computer-vision',
    'data-analysis',
    'deep-learning',
    'julia',
    'juptyer',
    'keras',
    'machine-learning',
    'nlp',
    'python',
    'r',
    'tensoflow',
  ],
};

export const RandomQuizList = [
  {
    question: "호이스팅에 대해 설명해보시오",
    answer: "호이스팅은 변수를 선언하고 초기화했을 때, 선언 부분이 최상단으로 끌어올려지는 현상을 말한다. let/const 변수 선언과 함수 표현식은 호이스팅이 발생하지 않고, var 변수 선언과 함수 선언문의 선언부분만 호이스팅이 일어난다. var변수/함수의 선언만 위로 끌어올려지고 할당은 끌어올려지지 않는다",
  },
  {
    question: "클로저는 무엇인가요? 원리와 왜 사용하는지?",
    answer: "클로저란 함수와 해당 함수가 선언된 렉시컬 환경의 조합이다. 외부 함수가 반환된 후에도 외부 함수의 변수 범위 체인에 접근할 수 있는 함수이다. 전역 변수의 사용을 억제하고, 정보를 은닉하기 위해 사용한다."
  },
  {
    question: "this의 용법을 아는대로 설명하시오",
    answer: "This는 함수를 호출할 때 결정되는 것이다. 전역범위에서 사용될 때 this는 전역객체를 가르킨다. 함수에서 사용될때도 전역객체를 가르킨다. 객체에 속한 메서드에서 사용될때 그 메서드의 객체(점 앞에 명시된 객체)를 가르킨다. 객체에 속한 메서드의 내부함수에서 사용될땐 전역객체를 가르킨다. 생성자에서 사용될때 생성자로 인해 생성된 새로운 객체를 가리킨다."
  },
  {
    question: "객체지향과 절차지향의 차이점",
    answer: "절차지향 프로그래밍이란 물이 위에서 흐르는 것과 같이 순차적인 처리가 중요시되며 프로그램 전체가 유기적으로 연결되도록 만드는 프로그래밍 기법입니다. 컴퓨터의 처리구조와 유사해 실행속도가 빠르다는 장점이 있습니다. 반면 유지보수가 어렵고 실행순서가 정해져있어 코드의 순서가 바뀌면 결과값이 달라질 수 있고 디버깅이 어렵다는 단점이 있습니다. 객체지향은 실제세계를 모델링하여 소프트웨어를 개발하는 방법입니다. 마치 컴퓨터 부품을 하나씩 사다가 컴퓨터를 조립하는 것과 같은 방법입니다. 코드의 재활용성이 높고 디버깅이 쉬운 장점이 있으며 처리속도가 절차지향보다 느리고 설계에 많은 시간이 소요되는 단점이 있습니다.",
  },
  {
    question: "오버라이딩과 오버로딩의 차이점과 특징",
    answer: "오버로딩은 '많은 것을 싣는다', 오버라이딩은 '재정의한다'는 사전적 의미를 가진 만큼 차이점도 이와 비슷하다고 볼 수 있습니다. 오버로딩은 하나의 클래스 안에서 인스턴스 개수나 형식이 다른 동일한 이름의 메소드를 여러 개 정의하는 것이고 정적 바인딩입니다. 오버라이딩은 상속을 했을 경우에 적용할 수 있고, 기존의 내용의 틀만 가져와서 재정의 하는 것이고 동적 바인딩입니다."
  },
  {
    question: "메모리 누수가 무엇인가?",
    answer: "메모리 누수가 무엇인가?프로그래밍에서 메모리 누수현상은 프로그램이 필요하지 않은 메모리를 계속 점유하고 있는 현상입니다. 자바에서 메모리누수는 더 이상 사용하지 않는 객체가 가비지컬렉션(GC)에 의해 회수되지 않고 누적되는 현상입니다. old영역에 누적된 객체로 인해서 메이저 GC가 빈번히 발생하게 되고 프로그램의 응답속도가 늦어지다 결국 Out of memory 오류로 프로그램이 종료됩니다."
  },
  {
    question: "DevOps 구현에 유용한 몇 가지 전제 조건을 설명하십시오.",
    answer: "조직의 고위급에서의 헌신. 조직 전체에 변화를 전달할 필요가 있습니다. 버전 관리 소프트웨어. 프로세스 준수를위한 자동화 도구. 자동화 된 테스트 자동화 된 배포"
  },
  {
    question: "지속적인 통합을 설명하십시오.",
    answer: "지속적인 통합은 Agile 프로세스에서 매우 중요한 구성 요소입니다. 일반적으로 개발자는 스프린트 내에서 기능 또는 사용자 스토리에 대해 작업하고 변경 사항을 버전 제어 저장소에 커밋합니다. 코드가 커밋되면 개발자의 전체 작업이 잘 통합되고 모든 체크인 또는 일정에 따라 정기적으로 빌드가 수행됩니다. 따라서 지속적 통합을 실행하면 개발자가 변경 사항을 다른 사용자와 통합하여 조기 피드백을받을 수 있습니다."
  },
  {
    question: "Thread 와 Process 의 차이점을 설명해주세요",
    answer: "모두 프로그램의 실행과 관련된 단어들 입니다. 차이점은 Process는 실행의 단위, Thread는 Process 내에서 실행되는 흐름의 단위로 Process는 독립적으로 실행되지만 Thread는 Process 내의 Thread 들끼리는 Heap,Data 등(Stack은 개별할당)을 공유합니다."
  },
  {
    question: "Lambda Function 과 High Order Function 에 대해 설명해보세요.",
    answer: "Kotlin에서는 함수형 프로그래밍을 지원합니다. High Order Function(고차함수) 란 , 함수를 인수로 취하거나 함수를 결과로 반환할 수 있는 함수를 말합니다. Android Studio 에서 자주 사용하는 Call-Back Method 등이 고차함수 입니다. 이러한 고차함수에서 매개변수로 주어지는 식을 Lambda Expression ( 람다 표현식 ) 이라고 부릅니다. Android Studio 같은 경우에 Java8 을 지원하지 않았기 때문에, Lambda Expression을 사용하지 못하고 비슷한 기능을 익명클래스를 만들어 사용하였으며 현재는 Kotlin 의 함수형 프로그래밍을 이용하여 Code를 간결하게 바꾸고 코딩의 자유도를 높일 수 있었습니다.",
  },
  {
    question: "Linear Regression이란?",
    answer: "2차원 좌표에 분포된 데이터를 1차원 방적식을 통해 표현되지 않은 데이터를 예측하기 위한 분석 모델"
  }
]

export function rand(min:number, max:number) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}