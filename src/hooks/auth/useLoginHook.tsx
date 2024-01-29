import { useMutation } from 'react-query';
import { postPromise } from '../../infrastructure/api/api';
import { SubmitHandler, useForm } from 'react-hook-form';
import { formSchema, formSchemaType } from '../../shared/schemas/loginSchema';
import { zodResolver } from '@hookform/resolvers/zod';

const useLoginHook = (query = '', navigation) => {

    const { control, handleSubmit, setError, formState: { errors, isSubmitting } } = useForm<formSchemaType>({
        resolver: zodResolver(formSchema)
    })

    const onSuccess = () => {
        console.log('logged In')
        navigation.navigate("Home")
    }

    const onSubmit: SubmitHandler<formSchemaType> = async () => {
        try {
            console.warn('here')
            await postLoginData()
            console.log('DONE DONE ')
        } catch {
            console.warn('here')
            setError(('loginName'), { message: 'root error ' })
        }
    }

    const { mutateAsync: postLoginData } = useMutation(
        {
            mutationFn: () => postPromise,
            onSuccess: () => onSuccess(),
            onSettled: () => { console.warn('okok') }
        }
    )

    return {
        onSuccess: handleSubmit(onSubmit),
        errors,
        isSubmitting,
        control
    }
}

export default useLoginHook