import React from 'react';
import FolderCopyIcon from '@mui/icons-material/FolderCopy';
import SecurityIcon from '@mui/icons-material/Security';
import PermDataSettingIcon from '@mui/icons-material/PermDataSetting';
import TipsAndUpdatesIcon from '@mui/icons-material/TipsAndUpdates';
import MobileScreenShareIcon from '@mui/icons-material/MobileScreenShare';
import GroupIcon from '@mui/icons-material/Group';
import CloudDownloadIcon from '@mui/icons-material/CloudDownload';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import SubjectIcon from '@mui/icons-material/Subject';
import SavedSearchIcon from '@mui/icons-material/SavedSearch';
import AudiotrackIcon from '@mui/icons-material/Audiotrack';
import ScreenShareIcon from '@mui/icons-material/ScreenShare';


function handleFileClick() {
    // const fileInput = document.createElement('input');
    // fileInput.type = 'file';
    // fileInput.accept = '.pdf, .jpg';
    // fileInput.multiple = true;
    // fileInput.style.display = 'none';

    // fileInput.addEventListener('change', function() {
    //   const files = fileInput.files;
    //   console.log(files);
    // });
    // fileInput.click();
}

function BottomBar() {
  return (
    <div className='bottombar'>
        <div className='bottombar-parent'>
        <ul className='bottombar-container'>
            <li className='bottombar-list' onClick={handleFileClick}>
                <div>Files</div>
                <FolderCopyIcon fontSize='small'  style={{color: 'blue'}}  />
            </li>
            <li className='bottombar-list' onClick={handleFileClick} >
                <div>Security</div>
                <SecurityIcon fontSize='small'  style={{color: 'blue'}}  />
            </li>
            <li className='bottombar-list' onClick={handleFileClick} >
                <div>Config</div>
                <PermDataSettingIcon fontSize='small'  style={{color: 'blue'}}  />
            </li>
            <li className='bottombar-list' onClick={handleFileClick} >
                <div>Ideas</div>
                <TipsAndUpdatesIcon fontSize='small'  style={{color: 'blue'}}  />
            </li>
            <li className='bottombar-list' onClick={handleFileClick} >
                <div>Mobiles</div>
                <MobileScreenShareIcon fontSize='small'  style={{color: 'blue'}}  />
            </li>
            <li className='bottombar-list' onClick={handleFileClick} >
                <div>Users</div>
                <GroupIcon fontSize='small'  style={{color: 'blue'}}  />
            </li>
            <li className='bottombar-list' onClick={handleFileClick} >
                <div>Downloads</div>
                <CloudDownloadIcon fontSize='small'  style={{color: 'blue'}}  />
            </li>
            <li className='bottombar-list' onClick={handleFileClick} >
                <div>Audit</div>
                <VerifiedUserIcon fontSize='small'  style={{color: 'blue'}}  />
            </li>
            <li className='bottombar-list' onClick={handleFileClick} >
                <div>Subject</div>
                <SubjectIcon fontSize='small'  style={{color: 'blue'}}  />
            </li>
            <li className='bottombar-list' onClick={handleFileClick} >
                <div>Search</div>
                <SavedSearchIcon fontSize='small'  style={{color: 'blue'}}  />
            </li>
            <li className='bottombar-list' onClick={handleFileClick} >
                <div>Audio</div>
                <AudiotrackIcon fontSize='small'  style={{color: 'blue'}}  />
            </li>
            <li className='bottombar-list' onClick={handleFileClick} >
                <div>Share</div>
                <ScreenShareIcon fontSize='small'  style={{color: 'blue'}}  />
            </li>
        </ul>
        </div>
    </div>
  )
}

export default BottomBar;
