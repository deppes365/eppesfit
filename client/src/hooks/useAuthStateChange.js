import { useEffect, useState, useRef } from 'react';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { app } from '../auth/firebase.config';

const useAuthStateChange = () => {
	const [loggedIn, setLoggedIn] = useState(true);
	const isMounted = useRef(true);

	useEffect(() => {
		const auth = getAuth(app);

		onAuthStateChanged(auth, user => {
			if (user) {
				setLoggedIn(true);
			} else {
                setLoggedIn(true)
            }
		});

        return () => {
            isMounted.current = false
        }
	}, [isMounted]);

	return { loggedIn };
};

export default useAuthStateChange;
