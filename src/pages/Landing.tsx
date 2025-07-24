// src/pages/Landing.tsx

import React, { useState, useEffect } from 'react';
import { BookOpen, Brain, Trophy, Users, Star, CheckCircle, Clock, BarChart3, User, PlusCircle, Target } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Container, Button, Card, CardContent, Badge, Header, Nav, Section, Span, H1, H2, P, Div, Footer } from '../lib/dev-container';
import { useAuth } from '../components/auth/AuthProvider';
import type { ComponentRegistryId } from '../registry/componentRegistry';

// Helper functions to ensure type safety for dynamic IDs
const getStatCardId = (index: number): ComponentRegistryId => {
  const ids: ComponentRegistryId[] = ['stat-card-0', 'stat-card-1', 'stat-card-2', 'stat-card-3'];
  return ids[index] || 'noID';
};

const getFeatureCardId = (index: number): ComponentRegistryId => {
  const ids: ComponentRegistryId[] = ['feature-card-0', 'feature-card-1', 'feature-card-2', 'feature-card-3'];
  return ids[index] || 'noID';
};

const getTestTypeCardId = (index: number): ComponentRegistryId => {
  const ids: ComponentRegistryId[] = ['test-type-card-0', 'test-type-card-1', 'test-type-card-2', 'test-type-card-3'];
  return ids[index] || 'noID';
};

const getBenefitCardId = (index: number): ComponentRegistryId => {
  const ids: ComponentRegistryId[] = ['benefit-card-0', 'benefit-card-1', 'benefit-card-2', 'benefit-card-3'];
  return ids[index] || 'noID';
};

export const Landing: React.FC = () => {
  const [mounted, setMounted] = useState(false);
  const { isAuthenticated, user } = useAuth();

  useEffect(() => {
    setMounted(true);
  }, []);

  const features = [
    {
      icon: <PlusCircle className="w-8 h-8 text-blue-500" />,
      title: "Easy Test Creation",
      description: "Create comprehensive tests with multiple question types including multiple choice, true/false, and short answers"
    },
    {
      icon: <Brain className="w-8 h-8 text-purple-500" />,
      title: "Smart Analytics",
      description: "Track performance with detailed analytics, progress reports, and insights into learning patterns"
    },
    {
      icon: <Clock className="w-8 h-8 text-green-500" />,
      title: "Real-time Results",
      description: "Get instant feedback and scoring with comprehensive result breakdowns and improvement suggestions"
    },
    {
      icon: <Users className="w-8 h-8 text-orange-500" />,
      title: "Collaborative Learning",
      description: "Share tests with others, create study groups, and learn together with collaborative features"
    }
  ];

  const stats = [
    { label: "Tests Created", value: "10K+" },
    { label: "Active Users", value: "2.5K" },
    { label: "Questions Bank", value: "50K+" },
    { label: "Success Rate", value: "94%" }
  ];

  const testTypes = [
    {
      icon: <CheckCircle className="w-6 h-6 text-green-500" />,
      title: "Multiple Choice",
      description: "Traditional multiple choice questions with customizable options"
    },
    {
      icon: <Target className="w-6 h-6 text-blue-500" />,
      title: "True/False",
      description: "Quick true or false questions for rapid assessment"
    },
    {
      icon: <BookOpen className="w-6 h-6 text-purple-500" />,
      title: "Short Answer",
      description: "Open-ended questions for detailed responses"
    },
    {
      icon: <BarChart3 className="w-6 h-6 text-orange-500" />,
      title: "Mixed Format",
      description: "Combine different question types in a single test"
    }
  ];

  const benefits = [
    {
      icon: <Trophy className="w-8 h-8 text-yellow-500" />,
      title: "Track Progress",
      description: "Monitor your learning journey with detailed progress tracking and performance metrics"
    },
    {
      icon: <Brain className="w-8 h-8 text-indigo-500" />,
      title: "Adaptive Learning",
      description: "Smart recommendations based on your performance to focus on areas that need improvement"
    },
    {
      icon: <Star className="w-8 h-8 text-pink-500" />,
      title: "Gamification",
      description: "Earn points, badges, and achievements to make learning more engaging and fun"
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-cyan-500" />,
      title: "Detailed Analytics",
      description: "Comprehensive reports showing strengths, weaknesses, and improvement opportunities"
    }
  ];

  return (
    <Container componentId="landing-page-root">
      <Div 
        devId="main-wrapper" 
        devName="Main Wrapper" 
        devDescription="Main page wrapper with gradient background"
        className="min-h-screen bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900"
      >
      {/* Header */}
      <Header 
        devId="main-header" 
        devName="Main Header" 
        devDescription="Primary site header with navigation"
        className="container mx-auto px-4 py-6"
      >
        <Nav 
          devId="main-nav" 
          devName="Main Navigation" 
          devDescription="Primary navigation bar"
          className="flex items-center justify-between"
        >
          <Div 
            devId="logo-section" 
            devName="Logo Section" 
            devDescription="Company logo and brand name"
            className="flex items-center space-x-2"
          >
            <Div devId="noID" className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center">
              <BookOpen className="w-5 h-5 text-white" />
            </Div>
            <Span 
              devId="brand-name" 
              devName="Brand Name" 
              devDescription="TestMaster brand name"
              className="text-xl font-bold text-white"
            >
              TestMaster
            </Span>
          </Div>
          <Div 
            devId="nav-actions" 
            devName="Navigation Actions" 
            devDescription="Navigation buttons and user menu"
            className="flex items-center space-x-4"
          >
            <Button 
              devId="docs-button" 
              devName="Docs Button" 
              devDescription="Link to documentation"
              variant="ghost" 
              className="text-gray-300 hover:text-white transition-colors"
            >
              Help
            </Button>
            {isAuthenticated ? (
              <Div 
                devId="user-section" 
                devName="User Section" 
                devDescription="Authenticated user welcome area"
                className="flex items-center space-x-4"
              >
                <Span 
                  devId="welcome-message" 
                  devName="Welcome Message" 
                  devDescription="Welcome message for authenticated user"
                  className="text-gray-300"
                >
                  Welcome, {user?.name?.split(' ')[0]}!
                </Span>
                <Link to="/dashboard">
                  <Button 
                    devId="nav-dashboard-button"
                    devName="Navigation Dashboard Button"
                    devDescription="Dashboard button in navigation header for authenticated users"
                    className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors"
                  >
                    <User className="w-4 h-4 mr-2" />
                    Dashboard
                  </Button>
                </Link>
              </Div>
            ) : (
              <Div 
                devId="auth-buttons" 
                devName="Authentication Buttons" 
                devDescription="Login and register buttons for unauthenticated users"
                className="flex items-center space-x-2"
              >
                <Link to="/login">
                  <Button 
                    devId="nav-login-button"
                    devName="Navigation Login Button"
                    devDescription="Login button in navigation header"
                    variant="ghost" 
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    Login
                  </Button>
                </Link>
                <Link to="/register">
                  <Button 
                    devId="nav-register-button"
                    devName="Navigation Register Button"
                    devDescription="Get started button in navigation header"
                    className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors"
                  >
                    Get Started
                  </Button>
                </Link>
              </Div>
            )}
          </Div>
        </Nav>
      </Header>

      {/* Hero Section */}
      <Container componentId="hero-section">
        <Section 
          devId="hero-content" 
          devName="Hero Content" 
          devDescription="Main hero Section with title and call-to-action"
          className="container mx-auto px-4 py-20 text-center"
        >
          <Div 
            devId="hero-content-wrapper" 
            devName="Hero Content Wrapper" 
            devDescription="Animated wrapper for hero content"
            className={`transition-all duration-1000 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          >
            <H1 
              devId="hero-title" 
              devName="Hero Title" 
              devDescription="Main hero title showcasing the platform"
              className="text-5xl md:text-7xl font-bold text-white mb-6"
            >
              Create & Take 
              <Span 
                devId="tests-highlight" 
                devName="Tests Highlight" 
                devDescription="Highlighted Tests text in gradient"
                className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"
              >
                {' '}Tests
              </Span>
              <br />Like Never Before
            </H1>
            <P 
              devId="hero-description" 
              devName="Hero Description" 
              devDescription="Hero Section description explaining the platform benefits"
              className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto"
            >
              Build comprehensive tests, track progress, and enhance learning with our powerful 
              test creation and management platform. Perfect for educators, trainers, and learners.
            </P>
            <Div 
              devId="hero-cta-buttons" 
              devName="Hero CTA Buttons" 
              devDescription="Call-to-action buttons in hero Section"
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              {isAuthenticated ? (
                <Link to="/dashboard">
                  <Button 
                    devId="hero-start-building"
                    devName="Start Building Button"
                    devDescription="Primary call-to-action button for starting to build tests"
                    className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 rounded-lg font-semibold transition-all transform hover:scale-105"
                  >
                    Go to Dashboard
                  </Button>
                </Link>
              ) : (
                <Link to="/register">
                  <Button 
                    devId="hero-start-building"
                    devName="Start Building Button"
                    devDescription="Primary call-to-action button for starting to build tests"
                    className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 rounded-lg font-semibold transition-all transform hover:scale-105"
                  >
                    Start Creating Tests
                  </Button>
                </Link>
              )}
              <Button 
                devId="hero-demo-button"
                devName="View Demo Button"
                devDescription="Secondary button to view demo"
                variant="outline"
                className="border border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white px-8 py-3 rounded-lg font-semibold transition-all"
              >
                View Demo
              </Button>
            </Div>
          </Div>
        </Section>
      </Container>

      {/* Stats Section */}
      <Container componentId="stats-section">
        <Section 
          devId="stats-content" 
          devName="Stats Content" 
          devDescription="Statistics Section showing platform metrics"
          className="container mx-auto px-4 py-12"
        >
          <Div 
            devId="stats-grid" 
            devName="Stats Grid" 
            devDescription="Grid container for statistics cards"
            className="grid grid-cols-2 md:grid-cols-4 gap-6"
          >
            {stats.map((stat, index) => (
              <Card 
                key={index} 
                devId={getStatCardId(index)}
                devName={`${stat.label} Stat Card`}
                devDescription={`Statistical card showing ${stat.label}: ${stat.value}`}
                className="bg-white/5 backdrop-blur-sm rounded-xl p-6 text-center border border-white/10"
              >
                <CardContent devId="noID"  className="p-0">
                  <Div devId="noID" className="text-2xl font-bold text-white mb-2">{stat.value}</Div>
                  <Div devId="noID" className="text-gray-400">{stat.label}</Div>
                </CardContent>
              </Card>
            ))}
          </Div>
        </Section>
      </Container>

      {/* Features Section */}
      <Container componentId="features-section">
        <Section devId="noID" className="container mx-auto px-4 py-20">
          <Div devId="noID" className="text-center mb-16">
            <H2 devId="noID" className="text-4xl font-bold text-white mb-4">Powerful Features</H2>
            <P devId="noID" className="text-gray-300 max-w-2xl mx-auto">
              Everything you need to create, manage, and analyze tests effectively
            </P>
          </Div>
          <Div devId="noID" className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <Card 
                key={index} 
                devId={getFeatureCardId(index)}
                devName={`${feature.title} Feature Card`}
                devDescription={`Feature card highlighting ${feature.title}: ${feature.description}`}
                className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-blue-500/50 transition-all"
              >
                <CardContent devId="noID" className="p-0">
                  <Div devId="noID" className="mb-4">{feature.icon}</Div>
                  <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                  <P devId="noID" className="text-gray-400">{feature.description}</P>
                </CardContent>
              </Card>
            ))}
          </Div>
        </Section>
      </Container>

      {/* Test Types Section */}
      <Container componentId="test-types-section">
        <Section devId="noID" className="container mx-auto px-4 py-20">
          <Div devId="noID" className="text-center mb-16">
            <H2 devId="noID" className="text-4xl font-bold text-white mb-4">Question Types</H2>
            <P devId="noID" className="text-gray-300 max-w-2xl mx-auto">
              Support for multiple question formats to create comprehensive assessments
            </P>
          </Div>
          <Div devId="noID" className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {testTypes.map((type, index) => (
              <Card 
                key={index} 
                devId={getTestTypeCardId(index)}
                devName={`${type.title} Test Type Card`}
                devDescription={`Test type card for ${type.title}: ${type.description}`}
                className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-purple-500/50 transition-all"
              >
                <CardContent devId="noID" className="p-0">
                  <Div devId="noID" className="mb-4 flex items-center justify-center w-12 h-12 bg-white/10 rounded-lg">
                    {type.icon}
                  </Div>
                  <h3 className="text-lg font-semibold text-white mb-2">{type.title}</h3>
                  <P devId="noID" className="text-gray-400 text-sm">{type.description}</P>
                </CardContent>
              </Card>
            ))}
          </Div>
        </Section>
      </Container>

      {/* Benefits Section */}
      <Container componentId="benefits-section">
        <Section devId="noID" className="container mx-auto px-4 py-20">
          <Div devId="noID" className="text-center mb-16">
            <H2 devId="noID" className="text-4xl font-bold text-white mb-4">Why Choose TestMaster?</H2>
            <P devId="noID" className="text-gray-300 max-w-2xl mx-auto">
              Advanced features that make test creation and learning more effective
            </P>
          </Div>
          <Div devId="noID" className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <Card 
                key={index} 
                devId={getBenefitCardId(index)}
                devName={`${benefit.title} Benefit Card`}
                devDescription={`Benefit card highlighting ${benefit.title}: ${benefit.description}`}
                className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-indigo-500/50 transition-all"
              >
                <CardContent devId="noID" className="p-0">
                  <Div devId="noID" className="mb-4">{benefit.icon}</Div>
                  <h3 className="text-xl font-semibold text-white mb-2">{benefit.title}</h3>
                  <P devId="noID" className="text-gray-400">{benefit.description}</P>
                </CardContent>
              </Card>
            ))}
          </Div>
        </Section>
      </Container>

      {/* CTA Section */}
      <Container componentId="cta-section">
        <Section devId="noID" className="container mx-auto px-4 py-20">
          <Div devId="noID" className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-2xl p-12 text-center border border-blue-500/30">
            <H2 devId="noID" className="text-4xl font-bold text-white mb-4">Ready to Transform Your Testing?</H2>
            <P devId="noID" className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Join thousands of educators and learners who are already using TestMaster to create better assessments
            </P>
            <Div devId="noID" className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                devId="cta-start-project"
                devName="Start Project Button"
                devDescription="Primary CTA button to start creating tests"
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 rounded-lg font-semibold transition-all transform hover:scale-105"
              >
                <span className="flex items-center gap-2">
                  <PlusCircle className="w-5 h-5" />
                  Create Your First Test
                </span>
              </Button>
              <Button 
                devId="cta-join-community"
                devName="Join Community Button"
                devDescription="Secondary CTA button to join the community"
                variant="outline"
                className="border border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white px-8 py-3 rounded-lg font-semibold transition-all"
              >
                <span className="flex items-center gap-2">
                  <Users className="w-5 h-5" />
                  Join Community
                </span>
              </Button>
            </Div>
          </Div>
        </Section>
      </Container>

      {/* Footer */}
      <Footer 
        devId="main-footer" 
        devName="Main Footer" 
        devDescription="Site footer with links and copyright"
        className="container mx-auto px-4 py-8 border-t border-white/10"
      >
        <Div devId="noID" className="flex flex-col md:flex-row justify-between items-center">
          <Div devId="noID" className="text-gray-400 mb-4 md:mb-0">
            © 2024 TestMaster. Empowering education through better testing.
          </Div>
          <Div devId="noID" className="flex space-x-6">
            <a href="#" className="text-gray-400 hover:text-white transition-colors">Documentation</a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">Support</a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy</a>
          </Div>
        </Div>
      </Footer>
      </Div>
    </Container>
  );
};