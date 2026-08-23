---
name: Siolla
category: FinTech · Investment · iOS & Android
badge: Featured Project
short_description: A comprehensive investment platform that turns spare money into passive income, making investing accessible to beginners. Features modern analytical tools, real-time market data, thousands of stocks and ETFs — all with zero extra fees or commissions.
icon: images/siolla/logo.png
order: 1
accent_color: "#0EA5E9"
overview: >
  Siolla is a micro-investment platform built with Flutter that transforms spare money into passive income streams. The app makes investing accessible to absolute beginners and everyone else — you can budget, spend, save, and invest your money without extra costs.


  The platform provides modern analytical tools and real-time market information, guiding users to understand how markets move and how they affect their portfolio in real time. With unlimited trading and zero commission fees, users can browse thousands of stocks and ETFs with detailed information on each.
stats:
  - number: "2"
    label: Years of active development
  - number: Live
    label: On Google Play & App Store
  - number: "9+"
    label: Live apps shipped to stores
capabilities:
  - icon: trending
    title: Real-time Market Data
    description: Live market analytics and portfolio tracking in real time to help users make informed decisions.
  - icon: dollar
    title: Commission-Free Trading
    description: Unlimited trading with zero commission, making investing accessible to everyone.
  - icon: analytics
    title: Advanced Analytics
    description: Smart analytics tools that help users understand the market and their portfolio performance.
  - icon: lock
    title: High-Security Data Handling
    description: Strict separation of concerns (UI, Domain, Data) ensuring financial data is handled safely.
  - icon: globe
    title: 1000s of Assets (ETFs & Stocks)
    description: Browse thousands of stocks and ETFs with in-depth information on every single asset.
  - icon: zap
    title: High Performance & Reliability
    description: Instant rendering of real-time data for a buttery-smooth trading experience.
architecture_text: >
  Built with Clean Architecture following Uncle Bob's principles — strict UI / Domain / Data layer separation for scalability, testability, and long-term maintainability. Riverpod with code generation handles state management, while AutoRoute provides type-safe navigation. REST APIs are secured with encryption and token-based authentication.
architecture_flow:
  - step: Presentation (Riverpod)
  - step: Domain (Use Cases)
  - step: Repository Interface
  - step: Data (Dio + Interceptors)
  - step: Secure REST APIs
challenges:
  - label: Security
    title: Encrypting sensitive financial data in transit
    description: Implemented encryption and token-based authentication best practices across multiple REST API integrations to protect sensitive user data.
  - label: Performance
    title: Real-time data rendering at scale
    description: Optimized app performance for real-time market data rendering, ensuring smooth updates even with complex financial calculations and live price feeds.
  - label: Architecture
    title: Maintaining clean separation in a large codebase
    description: Applied strict Clean Architecture with UI/Domain/Data layer separation, improving scalability and testability across a large-scale, high-traffic application.
tech_tags:
  - tag: Flutter
  - tag: Dart
  - tag: Clean Architecture
  - tag: Riverpod
  - tag: Auto Route
  - tag: REST API
  - tag: Dio
  - tag: Firebase
  - tag: Agile/Scrum
banner: images/siolla/banar.jpeg
mockups:
  - image: images/siolla/01.jpg
    caption: Home Dashboard
  - image: images/siolla/02.jpg
    caption: Portfolio Overview
  - image: images/siolla/03.jpg
    caption: Stock Details
  - image: images/siolla/04.jpg
    caption: Market Analytics
  - image: images/siolla/05.jpg
    caption: Investment Tools
  - image: images/siolla/06.jpg
    caption: Account Management
  - image: images/siolla/07.jpg
    caption: Trading Interface
links:
  google_play: https://play.google.com/store/apps/details?id=com.siolla.app
  app_store: https://apps.apple.com/sa/app/siolla/id1626263854
---
