import Image from 'next/image';
import styled from 'styled-components';

const HeaderImage = styled.img`
    width: 100%;
    object-fit: cover;
    height: 100%;
`;

const UserAvatar = styled.img`
    border-radius: 50%;
    width: ${({ size }) => (size === 'lg' ? '90px' : size === 'md' ? '48px' : '36px')};
    height: ${({ size }) => (size === 'lg' ? '90px' : size === 'md' ? '48px' : '36px')};
    position: absolute;
    bottom: ${({ size }) => (size === 'lg' ? '-36px' : size === 'md' ? '-24px' : '-15px')};
    background: linear-gradient(90deg, #667eea 0%, #764ba2 100%);
    left: 50%;
    z-index: 1;
`;

const ImageConatiner = styled.div`
    position: relative;
    width: 100%;
    height: 144px;
`;

const UserFullName = styled.h1`
    font-size: 1.5rem;
    font-weight: 600;
    margin-top: 36px;
`;

const UserName = styled.span`
    font-size: 1rem;
    font-weight: 400;
    color: #666666;
`;

const UserDescription = styled.p`
    font-size: 1rem;
    font-weight: 400;
    color: #404040;
`;

const UserInfoHeader = ({ username, fullName, headerImage, avatarImage, size = 'lg', description }) => {
    return (
        <div>
            {size !== 'sm' ? (
                <>
                    <ImageConatiner className='images'>
                        <HeaderImage src={headerImage} alt={fullName} />
                        <UserAvatar src={avatarImage} alt={fullName} size={size} />
                    </ImageConatiner>
                    <UserFullName className='title'>{fullName}</UserFullName>
                    <UserName className='username'>{username}</UserName>
                    <UserDescription className='description'>{description}</UserDescription>
                </>
            ) : (
                <div className='flex-h align-center gap-md bg-grey-50 mb-lg'>
                    <img src={avatarImage} alt={fullName} height={34} width={34} />
                    <div className='text'>
                        <h4 className='title'>{fullName}</h4>
                        <small className='username'>{username}</small>
                    </div>
                </div>
            )}
        </div>
    );
};

export default UserInfoHeader;
