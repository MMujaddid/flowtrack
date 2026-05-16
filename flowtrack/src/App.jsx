import React from 'react'
import { useAuth } from './AuthContext'

function App() {
  const { user, loading } = useAuth()

  return (
    <div style={{ 
      fontFamily: 'sans-serif', 
      display: 'flex', 
      flexDirection: 'column', 
      alignItems: 'center', 
      justifyContent: 'center', 
      height: '100vh',
      backgroundColor: '#f9fafb',
      color: '#111827'
    }}>
      <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>FlowTrack</h1>
      <p style={{ color: '#4b5563', fontSize: '1.2rem' }}>
        Week 1 Setup Complete! 🚀
      </p>
      
      <div style={{ 
        marginTop: '2rem', 
        padding: '1rem 2rem', 
        backgroundColor: '#ffffff', 
        borderRadius: '8px', 
        boxShadow: '0 1px 3px rgba(0,0,0,0.1)' 
      }}>
        <strong>Database Status:</strong> Connected to Supabase
      </div>
    </div>
  )
}

export default App