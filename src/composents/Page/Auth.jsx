import React, { useState } from 'react';
import { supabase } from '../autres/supabaseUtilisateur';
import { useNavigate } from 'react-router-dom';
import bcrypt from 'bcryptjs';
import '../../style/Page/Auth.css';

const Auth = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLogin, setIsLogin] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleAuth = async (e) => {
    e.preventDefault();
    setError(null);

    try {
      if (isLogin) {
        const { data: profileData, error: profileError } = await supabase
          .from('users')
          .select('id, username, password_hash')
          .eq('username', username) 
          .single();

        if (profileError || !profileData) {
          throw new Error('Nom d\'utilisateur ou mot de passe incorrect.');
        }

        const isPasswordValid = await bcrypt.compare(password, profileData.password_hash);
        if (!isPasswordValid) {
          throw new Error('Nom d\'utilisateur ou mot de passe incorrect.');
        }

        sessionStorage.setItem('user', JSON.stringify({
          id: profileData.id,
          username: profileData.username,
        }));

        navigate('/');
        window.location.reload();
      } else {
        const hashedPassword = await bcrypt.hash(password, 10);

        const { error: signUpError } = await supabase
          .from('users')
          .insert([{
            username,
            email,
            password_hash: hashedPassword,
          }])
          .single();

        if (signUpError) throw signUpError;

        sessionStorage.setItem('user', JSON.stringify({
          username,
        }));

        alert('Inscription réussie !');
        setUsername('');
        setEmail('');
        setPassword('');

        const { data: profileData } = await supabase
          .from('users')
          .select('id, username, password_hash')
          .eq('username', username) 
          .single();

         sessionStorage.setItem('user', JSON.stringify({
          id: profileData.id,
          username: profileData.username,
        }));

        navigate('/');
        window.location.reload();
      }
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="auth-container">
      <h2>{isLogin ? 'Connexion' : 'Inscription'}</h2>
      {error && <p className="error-message">{error}</p>}
      <form onSubmit={handleAuth}>
        {isLogin ? (
          <>
            <div className="form-group">
              <label>Pseudo</label>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>
          </>
        ) : (
          <>
            <div className="form-group">
              <label>Pseudo</label>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label>Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
          </>
        )}
        <div className="form-group">
          <label>Mot de passe</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">{isLogin ? 'Se connecter' : 'S\'inscrire'}</button>
      </form>
      <p onClick={() => setIsLogin(!isLogin)} className="toggle-auth">
        {isLogin ? 'Pas encore de compte ? Inscrivez-vous.' : 'Déjà un compte ? Connectez-vous.'}
      </p>
    </div>
  );
};

export default Auth;
